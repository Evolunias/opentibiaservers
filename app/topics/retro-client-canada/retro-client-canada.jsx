import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-canada');
}

export default function RetroClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-client-canada" />;
}
