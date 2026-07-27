import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-world');
}

export default function NepteraWorldKeywordPage() {
  return <StaticKeywordPage slug="neptera-world" />;
}
