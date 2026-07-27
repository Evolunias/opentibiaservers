import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-login');
}

export default function NewSeasonMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-login" />;
}
