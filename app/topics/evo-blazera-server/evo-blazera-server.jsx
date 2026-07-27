import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-blazera-server');
}

export default function EvoBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="evo-blazera-server" />;
}
