import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-season');
}

export default function MistOfDeathSeasonKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-season" />;
}
