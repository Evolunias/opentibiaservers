import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-usa-server');
}

export default function TibiaretroUsaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-usa-server" />;
}
