import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-europe');
}

export default function MiraclePvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-europe" />;
}
