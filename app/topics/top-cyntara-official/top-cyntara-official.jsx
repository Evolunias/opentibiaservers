import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-official');
}

export default function TopCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-official" />;
}
