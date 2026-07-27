import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-usa');
}

export default function RetroOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-usa" />;
}
