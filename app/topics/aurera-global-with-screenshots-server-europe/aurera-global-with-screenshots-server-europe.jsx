import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-screenshots-server-europe');
}

export default function AureraGlobalWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-screenshots-server-europe" />;
}
