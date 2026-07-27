import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-north-america');
}

export default function RealestaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-north-america" />;
}
