import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-72-retro-server');
}

export default function CalmeraOt772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-72-retro-server" />;
}
