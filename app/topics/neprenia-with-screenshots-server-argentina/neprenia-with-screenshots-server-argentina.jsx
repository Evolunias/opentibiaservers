import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-argentina');
}

export default function NepreniaWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-argentina" />;
}
