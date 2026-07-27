import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-north-america');
}

export default function RetroServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-north-america" />;
}
