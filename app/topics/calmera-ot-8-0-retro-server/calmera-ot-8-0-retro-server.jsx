import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-0-retro-server');
}

export default function CalmeraOt80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-0-retro-server" />;
}
