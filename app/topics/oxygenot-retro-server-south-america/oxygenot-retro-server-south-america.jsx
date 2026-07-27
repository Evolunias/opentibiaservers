import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-south-america');
}

export default function OxygenotRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-south-america" />;
}
