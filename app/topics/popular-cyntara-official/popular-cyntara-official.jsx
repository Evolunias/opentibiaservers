import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-official');
}

export default function PopularCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-official" />;
}
