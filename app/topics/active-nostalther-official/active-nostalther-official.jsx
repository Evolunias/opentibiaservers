import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-official');
}

export default function ActiveNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-official" />;
}
