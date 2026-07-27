import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-screenshots');
}

export default function EmpirebrScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="empirebr-screenshots" />;
}
