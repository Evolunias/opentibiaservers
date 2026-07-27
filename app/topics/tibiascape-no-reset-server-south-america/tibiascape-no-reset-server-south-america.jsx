import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-south-america');
}

export default function TibiascapeNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-south-america" />;
}
