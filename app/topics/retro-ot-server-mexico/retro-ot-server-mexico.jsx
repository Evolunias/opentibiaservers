import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-mexico');
}

export default function RetroOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-mexico" />;
}
