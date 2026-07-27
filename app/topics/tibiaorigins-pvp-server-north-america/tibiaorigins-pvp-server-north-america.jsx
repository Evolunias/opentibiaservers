import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-north-america');
}

export default function TibiaoriginsPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-north-america" />;
}
