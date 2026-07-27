import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-evo-servers');
}

export default function Saintsot12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-evo-servers" />;
}
