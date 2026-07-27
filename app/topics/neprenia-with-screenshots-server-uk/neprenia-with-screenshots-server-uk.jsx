import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-uk');
}

export default function NepreniaWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-uk" />;
}
