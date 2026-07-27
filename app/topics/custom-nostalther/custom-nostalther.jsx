import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther');
}

export default function CustomNostaltherKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther" />;
}
