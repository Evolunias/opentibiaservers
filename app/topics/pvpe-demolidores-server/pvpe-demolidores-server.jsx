import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-demolidores-server');
}

export default function PvpeDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-demolidores-server" />;
}
