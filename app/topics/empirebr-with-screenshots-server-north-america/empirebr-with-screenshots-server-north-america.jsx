import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-screenshots-server-north-america');
}

export default function EmpirebrWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-screenshots-server-north-america" />;
}
