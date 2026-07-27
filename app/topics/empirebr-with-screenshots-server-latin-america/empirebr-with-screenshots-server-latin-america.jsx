import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-screenshots-server-latin-america');
}

export default function EmpirebrWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-screenshots-server-latin-america" />;
}
