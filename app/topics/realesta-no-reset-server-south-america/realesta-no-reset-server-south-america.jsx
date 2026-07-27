import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-south-america');
}

export default function RealestaNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-south-america" />;
}
