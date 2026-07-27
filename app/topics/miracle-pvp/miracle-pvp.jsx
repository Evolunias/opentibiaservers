import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp');
}

export default function MiraclePvpKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp" />;
}
