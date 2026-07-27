import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-germany');
}

export default function SabrehavenRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-germany" />;
}
