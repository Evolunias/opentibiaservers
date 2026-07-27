import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-south-america');
}

export default function TibiaraNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-south-america" />;
}
