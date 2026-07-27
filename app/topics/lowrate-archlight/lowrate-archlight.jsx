import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight');
}

export default function LowrateArchlightKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight" />;
}
