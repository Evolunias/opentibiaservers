import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-latin-america');
}

export default function TibianusWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-latin-america" />;
}
