import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-old-school-server');
}

export default function Cyntara84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-old-school-server" />;
}
