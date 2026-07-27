import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-custom-map-servers-brazil');
}

export default function TibiaoriginsCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-custom-map-servers-brazil" />;
}
