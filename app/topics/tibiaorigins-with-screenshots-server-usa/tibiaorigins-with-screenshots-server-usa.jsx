import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-screenshots-server-usa');
}

export default function TibiaoriginsWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-screenshots-server-usa" />;
}
