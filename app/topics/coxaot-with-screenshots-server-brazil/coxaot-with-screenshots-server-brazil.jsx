import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-screenshots-server-brazil');
}

export default function CoxaotWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-screenshots-server-brazil" />;
}
