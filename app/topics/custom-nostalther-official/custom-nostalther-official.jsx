import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-official');
}

export default function CustomNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-official" />;
}
