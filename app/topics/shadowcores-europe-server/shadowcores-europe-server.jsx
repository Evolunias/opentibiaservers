import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-europe-server');
}

export default function ShadowcoresEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-europe-server" />;
}
