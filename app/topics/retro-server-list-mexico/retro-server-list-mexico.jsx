import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-mexico');
}

export default function RetroServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-mexico" />;
}
