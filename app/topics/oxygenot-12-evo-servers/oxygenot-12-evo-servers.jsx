import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-evo-servers');
}

export default function Oxygenot12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-evo-servers" />;
}
