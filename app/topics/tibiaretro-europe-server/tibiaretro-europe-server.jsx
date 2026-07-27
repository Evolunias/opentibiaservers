import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-europe-server');
}

export default function TibiaretroEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-europe-server" />;
}
