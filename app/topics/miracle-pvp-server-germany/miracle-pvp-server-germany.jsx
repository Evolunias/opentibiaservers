import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-germany');
}

export default function MiraclePvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-germany" />;
}
