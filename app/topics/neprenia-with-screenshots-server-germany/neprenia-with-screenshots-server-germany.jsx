import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-germany');
}

export default function NepreniaWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-germany" />;
}
