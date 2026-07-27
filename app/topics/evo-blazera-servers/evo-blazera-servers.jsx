import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-blazera-servers');
}

export default function EvoBlazeraServersKeywordPage() {
  return <StaticKeywordPage slug="evo-blazera-servers" />;
}
