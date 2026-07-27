import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ruthless-chaos-server');
}

export default function RetroRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="retro-ruthless-chaos-server" />;
}
