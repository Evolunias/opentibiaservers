import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-evo-server-chile');
}

export default function SabrehavenEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-evo-server-chile" />;
}
