import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-coxaot-server');
}

export default function RetroCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="retro-coxaot-server" />;
}
