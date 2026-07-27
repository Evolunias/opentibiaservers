import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-south-america');
}

export default function ShadowcoresNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-south-america" />;
}
