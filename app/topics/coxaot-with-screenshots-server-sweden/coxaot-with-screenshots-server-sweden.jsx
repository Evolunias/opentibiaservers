import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-screenshots-server-sweden');
}

export default function CoxaotWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-screenshots-server-sweden" />;
}
