import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-ots');
}

export default function NewNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-ots" />;
}
