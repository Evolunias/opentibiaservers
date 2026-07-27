import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-coxaot-servers');
}

export default function EvoCoxaotServersKeywordPage() {
  return <StaticKeywordPage slug="evo-coxaot-servers" />;
}
