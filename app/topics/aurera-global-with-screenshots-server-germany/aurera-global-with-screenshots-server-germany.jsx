import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-screenshots-server-germany');
}

export default function AureraGlobalWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-screenshots-server-germany" />;
}
