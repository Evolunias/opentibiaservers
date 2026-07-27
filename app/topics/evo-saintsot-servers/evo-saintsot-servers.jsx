import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-saintsot-servers');
}

export default function EvoSaintsotServersKeywordPage() {
  return <StaticKeywordPage slug="evo-saintsot-servers" />;
}
