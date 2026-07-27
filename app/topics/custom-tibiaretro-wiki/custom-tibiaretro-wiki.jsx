import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-wiki');
}

export default function CustomTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-wiki" />;
}
