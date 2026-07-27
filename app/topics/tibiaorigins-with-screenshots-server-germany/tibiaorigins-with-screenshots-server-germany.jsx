import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-screenshots-server-germany');
}

export default function TibiaoriginsWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-screenshots-server-germany" />;
}
