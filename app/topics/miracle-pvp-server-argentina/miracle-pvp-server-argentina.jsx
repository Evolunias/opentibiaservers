import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-argentina');
}

export default function MiraclePvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-argentina" />;
}
