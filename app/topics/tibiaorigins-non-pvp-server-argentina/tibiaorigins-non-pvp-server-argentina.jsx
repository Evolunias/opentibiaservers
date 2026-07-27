import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-argentina');
}

export default function TibiaoriginsNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-argentina" />;
}
