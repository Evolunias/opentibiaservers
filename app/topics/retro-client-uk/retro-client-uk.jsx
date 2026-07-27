import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-uk');
}

export default function RetroClientUkKeywordPage() {
  return <StaticKeywordPage slug="retro-client-uk" />;
}
