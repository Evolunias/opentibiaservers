import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-login');
}

export default function NewSeasonEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-login" />;
}
