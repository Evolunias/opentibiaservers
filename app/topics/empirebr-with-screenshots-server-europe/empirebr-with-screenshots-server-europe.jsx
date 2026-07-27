import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-screenshots-server-europe');
}

export default function EmpirebrWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-screenshots-server-europe" />;
}
