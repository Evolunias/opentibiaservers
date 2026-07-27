import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-official');
}

export default function FreshStartCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-official" />;
}
