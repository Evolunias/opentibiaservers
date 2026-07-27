import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-sweden');
}

export default function OtmadnessPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-sweden" />;
}
