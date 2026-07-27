import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-canada');
}

export default function TibiaoriginsPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-canada" />;
}
