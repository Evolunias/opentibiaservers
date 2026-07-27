import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-usa');
}

export default function TibianusWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-usa" />;
}
