import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-server');
}

export default function FreshStartMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-server" />;
}
