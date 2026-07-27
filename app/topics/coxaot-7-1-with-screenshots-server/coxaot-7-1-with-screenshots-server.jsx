import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-1-with-screenshots-server');
}

export default function Coxaot71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-1-with-screenshots-server" />;
}
