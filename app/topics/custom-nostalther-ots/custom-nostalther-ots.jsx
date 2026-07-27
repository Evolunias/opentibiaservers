import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-ots');
}

export default function CustomNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-ots" />;
}
