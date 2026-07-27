import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-donations');
}

export default function AlasteraDonationsKeywordPage() {
  return <StaticKeywordPage slug="alastera-donations" />;
}
