import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-official');
}

export default function BestCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-official" />;
}
