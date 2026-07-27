import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-official');
}

export default function NewNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-official" />;
}
