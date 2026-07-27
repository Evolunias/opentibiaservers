import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-official');
}

export default function NoResetEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-official" />;
}
