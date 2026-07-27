import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-mexico');
}

export default function RetroClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-client-mexico" />;
}
