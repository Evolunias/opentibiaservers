import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-wars');
}

export default function BlazeraWarsKeywordPage() {
  return <StaticKeywordPage slug="blazera-wars" />;
}
