import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-canada');
}

export default function RetroServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-canada" />;
}
