import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-official');
}

export default function BestRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-realera-official" />;
}
