import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-north-america');
}

export default function RetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-north-america" />;
}
