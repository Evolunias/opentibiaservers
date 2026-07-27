import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-uk');
}

export default function MiraclePvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-uk" />;
}
