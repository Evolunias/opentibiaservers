import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-screenshots-server-poland');
}

export default function CoxaotWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-screenshots-server-poland" />;
}
