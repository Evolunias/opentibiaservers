import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-official');
}

export default function NewEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-official" />;
}
