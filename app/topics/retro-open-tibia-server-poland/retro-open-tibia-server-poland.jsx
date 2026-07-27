import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-poland');
}

export default function RetroOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-poland" />;
}
