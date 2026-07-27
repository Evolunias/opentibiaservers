import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-retro-server-north-america');
}

export default function AlasteraRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-retro-server-north-america" />;
}
