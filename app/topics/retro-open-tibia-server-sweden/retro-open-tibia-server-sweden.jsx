import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-sweden');
}

export default function RetroOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-sweden" />;
}
