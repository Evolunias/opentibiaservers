import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-usa-servers');
}

export default function TibiaretroUsaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-usa-servers" />;
}
