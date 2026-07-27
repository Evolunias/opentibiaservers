import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-usa');
}

export default function TibiaoriginsPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-usa" />;
}
