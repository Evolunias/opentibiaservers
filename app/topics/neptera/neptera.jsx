import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera');
}

export default function NepteraKeywordPage() {
  return <StaticKeywordPage slug="neptera" />;
}
