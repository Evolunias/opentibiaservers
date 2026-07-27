import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-mexico');
}

export default function TibianusWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-mexico" />;
}
