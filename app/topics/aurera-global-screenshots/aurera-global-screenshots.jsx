import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-screenshots');
}

export default function AureraGlobalScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-screenshots" />;
}
