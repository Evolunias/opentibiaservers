import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-screenshots-server-europe');
}

export default function CoxaotWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-screenshots-server-europe" />;
}
