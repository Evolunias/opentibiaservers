import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-low-exp-server-brazil');
}

export default function TibiascapeLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-low-exp-server-brazil" />;
}
