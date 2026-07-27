import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-argentina');
}

export default function MidhemRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-argentina" />;
}
