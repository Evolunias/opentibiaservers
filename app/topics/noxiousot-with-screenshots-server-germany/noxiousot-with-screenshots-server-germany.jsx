import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-screenshots-server-germany');
}

export default function NoxiousotWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-screenshots-server-germany" />;
}
