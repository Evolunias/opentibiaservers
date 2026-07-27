import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-old-school-server');
}

export default function Cyntara11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-old-school-server" />;
}
