import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-mexico-servers');
}

export default function TibiaretroMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-mexico-servers" />;
}
