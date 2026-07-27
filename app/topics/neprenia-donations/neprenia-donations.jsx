import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-donations');
}

export default function NepreniaDonationsKeywordPage() {
  return <StaticKeywordPage slug="neprenia-donations" />;
}
