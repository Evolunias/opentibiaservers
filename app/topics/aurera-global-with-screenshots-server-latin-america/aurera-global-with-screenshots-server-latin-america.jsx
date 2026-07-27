import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-screenshots-server-latin-america');
}

export default function AureraGlobalWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-screenshots-server-latin-america" />;
}
