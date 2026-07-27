import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-europe');
}

export default function NonPvpOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-europe" />;
}
