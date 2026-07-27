import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-screenshots-server-uk');
}

export default function CoxaotWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-screenshots-server-uk" />;
}
