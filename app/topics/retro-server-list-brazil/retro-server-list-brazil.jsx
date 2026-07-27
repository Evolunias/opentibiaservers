import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-brazil');
}

export default function RetroServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-brazil" />;
}
