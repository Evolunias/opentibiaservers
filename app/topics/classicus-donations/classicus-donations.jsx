import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-donations');
}

export default function ClassicusDonationsKeywordPage() {
  return <StaticKeywordPage slug="classicus-donations" />;
}
