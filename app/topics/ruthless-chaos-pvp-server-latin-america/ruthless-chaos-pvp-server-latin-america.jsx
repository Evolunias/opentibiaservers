import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvp-server-latin-america');
}

export default function RuthlessChaosPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvp-server-latin-america" />;
}
