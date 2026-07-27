import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-poland');
}

export default function UnlineNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-poland" />;
}
