import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-mexico');
}

export default function NepreniaWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-mexico" />;
}
