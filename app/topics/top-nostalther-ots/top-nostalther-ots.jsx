import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-ots');
}

export default function TopNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-ots" />;
}
