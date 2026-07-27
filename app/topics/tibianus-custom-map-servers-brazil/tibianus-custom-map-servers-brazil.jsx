import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-servers-brazil');
}

export default function TibianusCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-servers-brazil" />;
}
