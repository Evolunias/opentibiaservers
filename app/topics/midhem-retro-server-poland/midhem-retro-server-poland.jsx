import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-poland');
}

export default function MidhemRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-poland" />;
}
