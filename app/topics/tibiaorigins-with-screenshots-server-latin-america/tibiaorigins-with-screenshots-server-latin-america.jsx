import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-screenshots-server-latin-america');
}

export default function TibiaoriginsWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-screenshots-server-latin-america" />;
}
