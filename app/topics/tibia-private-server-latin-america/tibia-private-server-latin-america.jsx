import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-latin-america');
}

export default function TibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-latin-america" />;
}
