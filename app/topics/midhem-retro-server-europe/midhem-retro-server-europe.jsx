import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-europe');
}

export default function MidhemRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-europe" />;
}
