import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-usa');
}

export default function MiraclePvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-usa" />;
}
