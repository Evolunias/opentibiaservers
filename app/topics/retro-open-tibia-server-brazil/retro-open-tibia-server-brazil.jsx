import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-open-tibia-server-brazil');
}

export default function RetroOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-open-tibia-server-brazil" />;
}
