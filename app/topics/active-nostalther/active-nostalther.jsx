import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther');
}

export default function ActiveNostaltherKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther" />;
}
