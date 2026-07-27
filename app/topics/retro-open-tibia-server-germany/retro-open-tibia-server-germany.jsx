import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-germany');
}

export default function RetroOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-germany" />;
}
