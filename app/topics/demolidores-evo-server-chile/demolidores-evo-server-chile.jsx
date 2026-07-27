import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-evo-server-chile');
}

export default function DemolidoresEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-evo-server-chile" />;
}
