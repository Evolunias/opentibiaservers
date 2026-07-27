import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-sweden');
}

export default function OtmadnessNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-sweden" />;
}
