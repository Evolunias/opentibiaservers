import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-official');
}

export default function CustomEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-official" />;
}
