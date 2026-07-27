import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-ots');
}

export default function LowrateNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-ots" />;
}
