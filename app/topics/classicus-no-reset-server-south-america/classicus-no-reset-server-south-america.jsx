import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-south-america');
}

export default function ClassicusNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-south-america" />;
}
