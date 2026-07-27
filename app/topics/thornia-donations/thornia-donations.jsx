import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-donations');
}

export default function ThorniaDonationsKeywordPage() {
  return <StaticKeywordPage slug="thornia-donations" />;
}
