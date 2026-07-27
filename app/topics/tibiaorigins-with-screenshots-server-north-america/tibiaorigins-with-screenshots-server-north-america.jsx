import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-screenshots-server-north-america');
}

export default function TibiaoriginsWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-screenshots-server-north-america" />;
}
