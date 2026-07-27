import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-argentina');
}

export default function OlderaPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-argentina" />;
}
