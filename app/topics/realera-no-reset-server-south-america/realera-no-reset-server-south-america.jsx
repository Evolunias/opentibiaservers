import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-south-america');
}

export default function RealeraNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-south-america" />;
}
