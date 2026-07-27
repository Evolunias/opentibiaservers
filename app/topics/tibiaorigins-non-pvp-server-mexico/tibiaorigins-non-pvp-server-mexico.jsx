import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-mexico');
}

export default function TibiaoriginsNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-mexico" />;
}
