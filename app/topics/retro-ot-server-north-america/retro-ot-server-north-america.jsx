import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-north-america');
}

export default function RetroOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-north-america" />;
}
