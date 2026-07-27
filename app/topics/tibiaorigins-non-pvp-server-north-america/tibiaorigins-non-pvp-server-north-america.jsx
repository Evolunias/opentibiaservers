import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-north-america');
}

export default function TibiaoriginsNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-north-america" />;
}
