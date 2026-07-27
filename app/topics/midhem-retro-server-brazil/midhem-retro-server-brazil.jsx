import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-brazil');
}

export default function MidhemRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-brazil" />;
}
