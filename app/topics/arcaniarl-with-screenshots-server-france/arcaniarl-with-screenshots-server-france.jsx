import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-france');
}

export default function ArcaniarlWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-france" />;
}
