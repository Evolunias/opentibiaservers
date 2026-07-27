import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-0-with-screenshots-server');
}

export default function Coxaot80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-0-with-screenshots-server" />;
}
