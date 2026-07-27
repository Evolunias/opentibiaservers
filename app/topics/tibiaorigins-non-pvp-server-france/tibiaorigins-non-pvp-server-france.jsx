import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-france');
}

export default function TibiaoriginsNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-france" />;
}
