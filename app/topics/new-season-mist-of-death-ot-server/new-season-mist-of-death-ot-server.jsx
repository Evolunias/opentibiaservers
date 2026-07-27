import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-ot-server');
}

export default function NewSeasonMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-ot-server" />;
}
