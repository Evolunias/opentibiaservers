import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-north-america');
}

export default function TibianusWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-north-america" />;
}
