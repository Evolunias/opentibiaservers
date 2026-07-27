import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-custom-map-server-argentina');
}

export default function SabrehavenCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-custom-map-server-argentina" />;
}
