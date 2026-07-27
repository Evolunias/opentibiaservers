import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-old-school-server');
}

export default function Cyntara81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-old-school-server" />;
}
