import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-official');
}

export default function BestThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-official" />;
}
