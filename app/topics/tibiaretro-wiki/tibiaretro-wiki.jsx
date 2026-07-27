import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-wiki');
}

export default function TibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-wiki" />;
}
