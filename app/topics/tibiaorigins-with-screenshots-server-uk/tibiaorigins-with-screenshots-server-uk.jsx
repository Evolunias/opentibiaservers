import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-screenshots-server-uk');
}

export default function TibiaoriginsWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-screenshots-server-uk" />;
}
