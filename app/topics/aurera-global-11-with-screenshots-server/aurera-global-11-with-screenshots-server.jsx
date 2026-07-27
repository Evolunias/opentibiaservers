import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-with-screenshots-server');
}

export default function AureraGlobal11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-with-screenshots-server" />;
}
