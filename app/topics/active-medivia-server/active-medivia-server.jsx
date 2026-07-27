import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-server');
}

export default function ActiveMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-server" />;
}
