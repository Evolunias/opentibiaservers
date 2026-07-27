import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-france');
}

export default function MidhemRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-france" />;
}
