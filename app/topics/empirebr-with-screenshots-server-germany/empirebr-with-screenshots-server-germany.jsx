import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-screenshots-server-germany');
}

export default function EmpirebrWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-screenshots-server-germany" />;
}
