import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey');
}

export default function ActiveEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey" />;
}
