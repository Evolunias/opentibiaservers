import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-mexico-server');
}

export default function TibiaretroMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-mexico-server" />;
}
