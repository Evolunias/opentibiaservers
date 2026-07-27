import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-europe');
}

export default function RetroClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-client-europe" />;
}
