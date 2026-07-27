import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-south-america');
}

export default function OtmadnessPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-south-america" />;
}
