import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-screenshots-server-germany');
}

export default function MistOfDeathWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-screenshots-server-germany" />;
}
