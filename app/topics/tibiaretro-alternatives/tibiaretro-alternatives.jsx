import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-alternatives');
}

export default function TibiaretroAlternativesKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-alternatives" />;
}
