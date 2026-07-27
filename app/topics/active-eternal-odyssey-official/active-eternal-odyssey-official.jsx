import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-official');
}

export default function ActiveEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-official" />;
}
