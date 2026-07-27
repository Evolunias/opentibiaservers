import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-donations');
}

export default function NostaltherDonationsKeywordPage() {
  return <StaticKeywordPage slug="nostalther-donations" />;
}
