import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-demolidores-server');
}

export default function EvoDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="evo-demolidores-server" />;
}
