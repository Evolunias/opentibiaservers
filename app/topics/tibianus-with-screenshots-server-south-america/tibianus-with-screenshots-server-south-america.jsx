import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-south-america');
}

export default function TibianusWithScreenshotsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-south-america" />;
}
