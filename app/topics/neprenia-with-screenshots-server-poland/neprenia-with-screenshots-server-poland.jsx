import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-poland');
}

export default function NepreniaWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-poland" />;
}
