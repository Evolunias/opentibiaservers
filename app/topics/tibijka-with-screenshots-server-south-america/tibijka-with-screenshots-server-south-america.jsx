import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-south-america');
}

export default function TibijkaWithScreenshotsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-south-america" />;
}
