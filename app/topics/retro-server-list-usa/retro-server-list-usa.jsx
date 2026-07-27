import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-usa');
}

export default function RetroServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-usa" />;
}
