import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey');
}

export default function NewEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey" />;
}
