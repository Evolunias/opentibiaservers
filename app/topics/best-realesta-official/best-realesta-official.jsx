import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-official');
}

export default function BestRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-official" />;
}
