import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-with-screenshots-server');
}

export default function Coxaot15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-with-screenshots-server" />;
}
