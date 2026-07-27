import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-brazil');
}

export default function TibiaOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-brazil" />;
}
