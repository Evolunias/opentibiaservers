import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-usa');
}

export default function NepreniaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-usa" />;
}
