import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-donations');
}

export default function MiracleDonationsKeywordPage() {
  return <StaticKeywordPage slug="miracle-donations" />;
}
