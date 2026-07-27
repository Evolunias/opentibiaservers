import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther');
}

export default function OfficialNostaltherKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther" />;
}
