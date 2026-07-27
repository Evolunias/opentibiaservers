import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-retro-server');
}

export default function CalmeraOt100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-retro-server" />;
}
