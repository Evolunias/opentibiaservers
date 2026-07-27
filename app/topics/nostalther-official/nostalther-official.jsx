import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-official');
}

export default function NostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="nostalther-official" />;
}
