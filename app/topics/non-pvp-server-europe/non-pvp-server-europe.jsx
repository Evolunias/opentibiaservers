import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-europe');
}

export default function NonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-europe" />;
}
