import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-south-america');
}

export default function TibijkaNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-south-america" />;
}
