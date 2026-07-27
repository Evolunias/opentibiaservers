import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-north-america');
}

export default function RetroClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-client-north-america" />;
}
