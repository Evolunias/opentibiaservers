import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-argentina');
}

export default function RetroClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-client-argentina" />;
}
