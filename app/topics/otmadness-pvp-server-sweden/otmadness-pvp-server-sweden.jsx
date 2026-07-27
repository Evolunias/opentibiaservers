import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-sweden');
}

export default function OtmadnessPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-sweden" />;
}
