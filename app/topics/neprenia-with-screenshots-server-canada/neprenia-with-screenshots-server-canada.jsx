import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-canada');
}

export default function NepreniaWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-canada" />;
}
