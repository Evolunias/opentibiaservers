import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-official');
}

export default function LowrateNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-official" />;
}
