import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-screenshots-server-usa');
}

export default function AureraGlobalWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-screenshots-server-usa" />;
}
