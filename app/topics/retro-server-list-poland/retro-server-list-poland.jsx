import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-poland');
}

export default function RetroServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-poland" />;
}
