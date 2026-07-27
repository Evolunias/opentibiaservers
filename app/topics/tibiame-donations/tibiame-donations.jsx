import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-donations');
}

export default function TibiameDonationsKeywordPage() {
  return <StaticKeywordPage slug="tibiame-donations" />;
}
