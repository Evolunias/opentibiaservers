import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-old-school-server');
}

export default function Cyntara96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-old-school-server" />;
}
