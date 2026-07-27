import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-season');
}

export default function MediviaSeasonKeywordPage() {
  return <StaticKeywordPage slug="medivia-season" />;
}
