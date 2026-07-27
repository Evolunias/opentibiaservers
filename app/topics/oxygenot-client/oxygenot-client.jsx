import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-client');
}

export default function OxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-client" />;
}
