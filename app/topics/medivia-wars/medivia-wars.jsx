import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-wars');
}

export default function MediviaWarsKeywordPage() {
  return <StaticKeywordPage slug="medivia-wars" />;
}
