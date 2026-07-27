import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-with-screenshots-server');
}

export default function AureraGlobal15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-with-screenshots-server" />;
}
