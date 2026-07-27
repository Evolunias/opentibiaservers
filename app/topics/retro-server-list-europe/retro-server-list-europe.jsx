import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-europe');
}

export default function RetroServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-europe" />;
}
