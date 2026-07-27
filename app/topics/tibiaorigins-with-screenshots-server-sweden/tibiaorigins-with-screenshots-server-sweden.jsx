import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-screenshots-server-sweden');
}

export default function TibiaoriginsWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-screenshots-server-sweden" />;
}
