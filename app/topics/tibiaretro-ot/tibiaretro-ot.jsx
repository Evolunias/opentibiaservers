import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-ot');
}

export default function TibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-ot" />;
}
