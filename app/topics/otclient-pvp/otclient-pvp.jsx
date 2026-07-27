import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-pvp');
}

export default function OtclientPvpKeywordPage() {
  return <StaticKeywordPage slug="otclient-pvp" />;
}
