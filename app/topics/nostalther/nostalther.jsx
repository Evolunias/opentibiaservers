import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther');
}

export default function NostaltherKeywordPage() {
  return <StaticKeywordPage slug="nostalther" />;
}
