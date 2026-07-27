import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-canada');
}

export default function TibiaoriginsNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-canada" />;
}
