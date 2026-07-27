import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-official');
}

export default function BestNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-official" />;
}
