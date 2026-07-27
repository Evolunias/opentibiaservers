import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-screenshots');
}

export default function MiracleScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="miracle-screenshots" />;
}
