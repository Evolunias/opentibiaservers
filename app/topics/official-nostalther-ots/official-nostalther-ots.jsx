import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-ots');
}

export default function OfficialNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-ots" />;
}
