import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-north-america');
}

export default function MidhemRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-north-america" />;
}
