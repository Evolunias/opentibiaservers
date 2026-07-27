import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-poland');
}

export default function TibianusNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-poland" />;
}
