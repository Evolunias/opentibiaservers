import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-screenshots-server-france');
}

export default function NtoStarWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-screenshots-server-france" />;
}
