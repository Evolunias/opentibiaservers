import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-argentina');
}

export default function TibiaoriginsPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-argentina" />;
}
