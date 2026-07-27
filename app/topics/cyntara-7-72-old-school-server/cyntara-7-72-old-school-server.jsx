import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-old-school-server');
}

export default function Cyntara772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-old-school-server" />;
}
