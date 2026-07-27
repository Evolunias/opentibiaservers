import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-uk');
}

export default function RetroServerListUkKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-uk" />;
}
