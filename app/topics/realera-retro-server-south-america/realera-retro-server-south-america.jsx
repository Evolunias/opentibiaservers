import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-south-america');
}

export default function RealeraRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-south-america" />;
}
