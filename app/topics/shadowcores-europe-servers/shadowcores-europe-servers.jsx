import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-europe-servers');
}

export default function ShadowcoresEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-europe-servers" />;
}
