import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther');
}

export default function NewNostaltherKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther" />;
}
