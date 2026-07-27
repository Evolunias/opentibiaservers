import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-uk');
}

export default function MidhemRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-uk" />;
}
