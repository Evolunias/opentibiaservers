import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-poland');
}

export default function ShadowcoresNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-poland" />;
}
