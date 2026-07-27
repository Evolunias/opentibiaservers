import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-with-screenshots-server');
}

export default function Coxaot12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-with-screenshots-server" />;
}
