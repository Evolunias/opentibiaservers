import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-brazil');
}

export default function MiraclePvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-brazil" />;
}
