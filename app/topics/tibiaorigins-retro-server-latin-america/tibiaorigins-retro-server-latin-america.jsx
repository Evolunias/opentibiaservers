import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-latin-america');
}

export default function TibiaoriginsRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-latin-america" />;
}
