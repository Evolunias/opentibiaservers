import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther');
}

export default function LowrateNostaltherKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther" />;
}
