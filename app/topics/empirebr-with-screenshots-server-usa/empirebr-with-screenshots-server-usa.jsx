import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-screenshots-server-usa');
}

export default function EmpirebrWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-screenshots-server-usa" />;
}
