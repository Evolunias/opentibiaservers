import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-germany');
}

export default function OxygenotWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-germany" />;
}
