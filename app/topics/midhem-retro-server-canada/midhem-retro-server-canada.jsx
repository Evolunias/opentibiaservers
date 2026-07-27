import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-canada');
}

export default function MidhemRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-canada" />;
}
