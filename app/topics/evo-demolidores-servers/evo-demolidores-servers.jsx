import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-demolidores-servers');
}

export default function EvoDemolidoresServersKeywordPage() {
  return <StaticKeywordPage slug="evo-demolidores-servers" />;
}
