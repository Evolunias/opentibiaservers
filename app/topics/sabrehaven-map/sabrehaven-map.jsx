import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-map');
}

export default function SabrehavenMapKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-map" />;
}
