import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-brazil');
}

export default function RetroClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-client-brazil" />;
}
