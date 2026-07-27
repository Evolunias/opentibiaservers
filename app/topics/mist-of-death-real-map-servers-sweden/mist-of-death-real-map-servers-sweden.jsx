import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-sweden');
}

export default function MistOfDeathRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-sweden" />;
}
