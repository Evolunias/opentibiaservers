import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-ots');
}

export default function TibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="tibijka-ots" />;
}
