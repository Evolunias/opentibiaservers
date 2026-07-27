import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-sweden-server');
}

export default function ThaisotSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-sweden-server" />;
}
