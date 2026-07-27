import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-retro-server-south-america');
}

export default function CanobRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-retro-server-south-america" />;
}
