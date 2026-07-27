import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-donations');
}

export default function TibianusDonationsKeywordPage() {
  return <StaticKeywordPage slug="tibianus-donations" />;
}
