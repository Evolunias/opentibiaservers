import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-commands');
}

export default function TibiaretroCommandsKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-commands" />;
}
