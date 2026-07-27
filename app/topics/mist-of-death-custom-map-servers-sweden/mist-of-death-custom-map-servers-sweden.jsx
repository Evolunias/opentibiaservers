import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-servers-sweden');
}

export default function MistOfDeathCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-servers-sweden" />;
}
