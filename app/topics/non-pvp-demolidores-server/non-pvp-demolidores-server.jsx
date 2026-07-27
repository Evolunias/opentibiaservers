import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-demolidores-server');
}

export default function NonPvpDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-demolidores-server" />;
}
