import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-south-america');
}

export default function OlderaNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-south-america" />;
}
