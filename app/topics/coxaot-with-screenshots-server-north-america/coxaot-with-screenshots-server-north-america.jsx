import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-screenshots-server-north-america');
}

export default function CoxaotWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-screenshots-server-north-america" />;
}
