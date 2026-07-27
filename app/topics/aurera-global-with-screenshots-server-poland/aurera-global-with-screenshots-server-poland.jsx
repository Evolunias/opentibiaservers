import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-screenshots-server-poland');
}

export default function AureraGlobalWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-screenshots-server-poland" />;
}
