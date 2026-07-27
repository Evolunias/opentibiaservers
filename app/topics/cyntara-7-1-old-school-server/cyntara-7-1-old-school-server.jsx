import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-old-school-server');
}

export default function Cyntara71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-old-school-server" />;
}
