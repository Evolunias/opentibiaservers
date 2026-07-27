import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey');
}

export default function CustomEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey" />;
}
