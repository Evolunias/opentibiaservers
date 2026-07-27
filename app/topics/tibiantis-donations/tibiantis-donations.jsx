import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-donations');
}

export default function TibiantisDonationsKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-donations" />;
}
