import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-south-america');
}

export default function RetroServerListSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-south-america" />;
}
