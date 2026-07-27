import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-ots');
}

export default function CurrentNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-ots" />;
}
