import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-argentina');
}

export default function RetroOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-argentina" />;
}
