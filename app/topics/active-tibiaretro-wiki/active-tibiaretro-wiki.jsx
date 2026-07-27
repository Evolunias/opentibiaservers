import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-wiki');
}

export default function ActiveTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-wiki" />;
}
