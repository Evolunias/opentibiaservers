import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-server-sweden');
}

export default function MistOfDeathRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-server-sweden" />;
}
