import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-with-screenshots-server');
}

export default function Coxaot14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-with-screenshots-server" />;
}
