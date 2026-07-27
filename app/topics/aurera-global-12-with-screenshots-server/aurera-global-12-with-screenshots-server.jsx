import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-with-screenshots-server');
}

export default function AureraGlobal12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-with-screenshots-server" />;
}
