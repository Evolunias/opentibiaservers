import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-canada');
}

export default function RetroOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-canada" />;
}
