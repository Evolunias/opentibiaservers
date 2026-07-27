import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-screenshots-server-sweden');
}

export default function EmpirebrWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-screenshots-server-sweden" />;
}
