import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-client');
}

export default function NewTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-client" />;
}
