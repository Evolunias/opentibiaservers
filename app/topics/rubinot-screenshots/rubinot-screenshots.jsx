import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-screenshots');
}

export default function RubinotScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="rubinot-screenshots" />;
}
