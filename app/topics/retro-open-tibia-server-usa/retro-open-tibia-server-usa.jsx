import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-usa');
}

export default function RetroOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-usa" />;
}
