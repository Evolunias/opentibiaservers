import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-screenshots-server-latin-america');
}

export default function CoxaotWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-screenshots-server-latin-america" />;
}
