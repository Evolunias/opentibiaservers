import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-ot');
}

export default function TibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="tibijka-ot" />;
}
