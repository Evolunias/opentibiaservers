import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-north-america');
}

export default function OxygenotRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-north-america" />;
}
