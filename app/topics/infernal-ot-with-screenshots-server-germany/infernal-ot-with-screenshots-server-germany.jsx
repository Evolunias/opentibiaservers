import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-screenshots-server-germany');
}

export default function InfernalOtWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-screenshots-server-germany" />;
}
