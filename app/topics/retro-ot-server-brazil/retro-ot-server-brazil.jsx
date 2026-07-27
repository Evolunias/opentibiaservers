import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-brazil');
}

export default function RetroOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-brazil" />;
}
