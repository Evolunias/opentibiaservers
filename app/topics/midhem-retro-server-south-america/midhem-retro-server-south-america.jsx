import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-south-america');
}

export default function MidhemRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-south-america" />;
}
