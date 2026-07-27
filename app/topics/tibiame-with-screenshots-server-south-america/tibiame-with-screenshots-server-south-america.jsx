import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-south-america');
}

export default function TibiameWithScreenshotsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-south-america" />;
}
