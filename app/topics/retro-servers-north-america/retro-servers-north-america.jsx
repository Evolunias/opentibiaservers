import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-north-america');
}

export default function RetroServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-north-america" />;
}
