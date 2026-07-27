import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-wiki');
}

export default function NoResetTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-wiki" />;
}
