import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-south-america');
}

export default function RealestaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-south-america" />;
}
