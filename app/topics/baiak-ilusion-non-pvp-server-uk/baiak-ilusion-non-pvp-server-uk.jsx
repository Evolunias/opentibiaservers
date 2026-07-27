import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-uk');
}

export default function BaiakIlusionNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-uk" />;
}
