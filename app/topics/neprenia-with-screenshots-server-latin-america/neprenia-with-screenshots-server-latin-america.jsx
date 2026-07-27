import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-latin-america');
}

export default function NepreniaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-latin-america" />;
}
