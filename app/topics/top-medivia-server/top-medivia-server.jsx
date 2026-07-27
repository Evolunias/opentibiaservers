import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-server');
}

export default function TopMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-server" />;
}
