import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-screenshots-server-france');
}

export default function TibiaoriginsWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-screenshots-server-france" />;
}
