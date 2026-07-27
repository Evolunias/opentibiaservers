import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-brazil');
}

export default function TibiascapeHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-brazil" />;
}
