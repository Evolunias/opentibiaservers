import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey');
}

export default function OfficialEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey" />;
}
