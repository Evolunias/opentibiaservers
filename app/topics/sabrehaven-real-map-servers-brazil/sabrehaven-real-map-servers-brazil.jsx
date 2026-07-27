import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-brazil');
}

export default function SabrehavenRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-brazil" />;
}
