import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-with-screenshots-server');
}

export default function Coxaot11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-with-screenshots-server" />;
}
