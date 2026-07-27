import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-ot');
}

export default function OfficialNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-ot" />;
}
