import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-canada');
}

export default function TibianusWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-canada" />;
}
