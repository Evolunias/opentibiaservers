import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-empirebr-server');
}

export default function RetroEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="retro-empirebr-server" />;
}
