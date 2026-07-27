import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-germany');
}

export default function RetroServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-germany" />;
}
