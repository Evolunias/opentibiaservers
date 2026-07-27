import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-france');
}

export default function NepreniaWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-france" />;
}
