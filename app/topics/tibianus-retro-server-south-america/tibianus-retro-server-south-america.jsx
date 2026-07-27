import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-south-america');
}

export default function TibianusRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-south-america" />;
}
