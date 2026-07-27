import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-non-pvp');
}

export default function OtclientNonPvpKeywordPage() {
  return <StaticKeywordPage slug="otclient-non-pvp" />;
}
