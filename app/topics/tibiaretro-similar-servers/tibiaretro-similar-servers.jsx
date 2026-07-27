import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-similar-servers');
}

export default function TibiaretroSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-similar-servers" />;
}
