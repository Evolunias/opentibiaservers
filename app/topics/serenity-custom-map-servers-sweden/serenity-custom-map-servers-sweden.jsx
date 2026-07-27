import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-servers-sweden');
}

export default function SerenityCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-servers-sweden" />;
}
