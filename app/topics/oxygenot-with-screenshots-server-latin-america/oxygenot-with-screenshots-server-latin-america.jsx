import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-latin-america');
}

export default function OxygenotWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-latin-america" />;
}
