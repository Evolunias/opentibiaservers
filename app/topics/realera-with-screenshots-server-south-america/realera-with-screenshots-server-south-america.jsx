import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-south-america');
}

export default function RealeraWithScreenshotsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-south-america" />;
}
