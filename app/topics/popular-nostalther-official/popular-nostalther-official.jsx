import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-official');
}

export default function PopularNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-official" />;
}
