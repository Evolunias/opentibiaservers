import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-saintsot-server');
}

export default function EvoSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="evo-saintsot-server" />;
}
