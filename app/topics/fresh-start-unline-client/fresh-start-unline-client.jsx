import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-client');
}

export default function FreshStartUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-client" />;
}
