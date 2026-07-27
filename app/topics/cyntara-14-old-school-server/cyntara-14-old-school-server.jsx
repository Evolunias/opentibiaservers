import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-old-school-server');
}

export default function Cyntara14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-old-school-server" />;
}
