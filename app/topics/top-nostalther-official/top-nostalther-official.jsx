import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-official');
}

export default function TopNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-official" />;
}
