import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-screenshots');
}

export default function CoxaotScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="coxaot-screenshots" />;
}
