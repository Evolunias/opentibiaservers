import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-alternatives');
}

export default function BlazeraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="blazera-alternatives" />;
}
