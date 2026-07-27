import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-europe');
}

export default function AlasteraNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-europe" />;
}
