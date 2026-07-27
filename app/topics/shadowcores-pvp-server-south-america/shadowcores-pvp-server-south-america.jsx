import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvp-server-south-america');
}

export default function ShadowcoresPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvp-server-south-america" />;
}
