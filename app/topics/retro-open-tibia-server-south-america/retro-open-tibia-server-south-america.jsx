import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-south-america');
}

export default function RetroOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-south-america" />;
}
