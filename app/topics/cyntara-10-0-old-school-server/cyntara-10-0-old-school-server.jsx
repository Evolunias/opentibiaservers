import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-old-school-server');
}

export default function Cyntara100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-old-school-server" />;
}
