import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-latin-america');
}

export default function LumineraWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-latin-america" />;
}
