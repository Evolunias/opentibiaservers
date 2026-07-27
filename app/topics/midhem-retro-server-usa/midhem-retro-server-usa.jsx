import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-usa');
}

export default function MidhemRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-usa" />;
}
