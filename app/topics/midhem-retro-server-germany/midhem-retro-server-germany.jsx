import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-germany');
}

export default function MidhemRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-germany" />;
}
