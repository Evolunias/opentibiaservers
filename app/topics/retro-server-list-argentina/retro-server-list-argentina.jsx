import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-argentina');
}

export default function RetroServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-argentina" />;
}
