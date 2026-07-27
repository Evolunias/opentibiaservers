import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-screenshots-server-brazil');
}

export default function AureraGlobalWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-screenshots-server-brazil" />;
}
