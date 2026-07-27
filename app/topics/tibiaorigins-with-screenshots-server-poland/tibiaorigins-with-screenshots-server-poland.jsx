import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-screenshots-server-poland');
}

export default function TibiaoriginsWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-screenshots-server-poland" />;
}
