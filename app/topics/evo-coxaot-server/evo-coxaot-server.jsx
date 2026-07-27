import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-coxaot-server');
}

export default function EvoCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="evo-coxaot-server" />;
}
