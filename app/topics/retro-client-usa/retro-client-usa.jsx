import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-usa');
}

export default function RetroClientUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-client-usa" />;
}
