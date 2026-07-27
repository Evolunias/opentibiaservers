import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-mexico');
}

export default function MidhemRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-mexico" />;
}
