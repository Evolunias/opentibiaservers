import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-poland');
}

export default function MiraclePvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-poland" />;
}
