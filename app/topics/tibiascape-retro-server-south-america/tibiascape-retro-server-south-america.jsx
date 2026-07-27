import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-south-america');
}

export default function TibiascapeRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-south-america" />;
}
