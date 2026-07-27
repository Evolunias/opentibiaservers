import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-donations');
}

export default function ClassickDrakoriaDonationsKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-donations" />;
}
