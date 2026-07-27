import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-chile');
}

export default function RetroOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-chile" />;
}
