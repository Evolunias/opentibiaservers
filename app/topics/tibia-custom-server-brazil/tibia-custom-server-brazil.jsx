import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-brazil');
}

export default function TibiaCustomServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-brazil" />;
}
