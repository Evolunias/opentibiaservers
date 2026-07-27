import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-north-america');
}

export default function RealeraRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-north-america" />;
}
