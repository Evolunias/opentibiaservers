import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-poland');
}

export default function TibianusWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-poland" />;
}
