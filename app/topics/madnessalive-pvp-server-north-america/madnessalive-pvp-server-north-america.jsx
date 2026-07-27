import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-north-america');
}

export default function MadnessalivePvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-north-america" />;
}
