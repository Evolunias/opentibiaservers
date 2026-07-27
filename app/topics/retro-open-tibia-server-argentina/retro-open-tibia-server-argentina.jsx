import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-argentina');
}

export default function RetroOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-argentina" />;
}
