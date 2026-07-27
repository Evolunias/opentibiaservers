import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-canada-server');
}

export default function TibiaretroCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-canada-server" />;
}
