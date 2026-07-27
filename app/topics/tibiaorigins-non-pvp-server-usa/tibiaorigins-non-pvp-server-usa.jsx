import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-usa');
}

export default function TibiaoriginsNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-usa" />;
}
