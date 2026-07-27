import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-brazil');
}

export default function OtmadnessPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-brazil" />;
}
