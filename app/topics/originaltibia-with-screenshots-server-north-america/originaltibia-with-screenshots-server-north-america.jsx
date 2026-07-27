import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-screenshots-server-north-america');
}

export default function OriginaltibiaWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-screenshots-server-north-america" />;
}
