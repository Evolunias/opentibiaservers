import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-poland');
}

export default function ShadowcoresPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-poland" />;
}
