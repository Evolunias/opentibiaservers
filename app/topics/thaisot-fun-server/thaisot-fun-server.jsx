import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fun-server');
}

export default function ThaisotFunServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fun-server" />;
}
