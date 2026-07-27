import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-south-america');
}

export default function KasteriaWithScreenshotsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-south-america" />;
}
