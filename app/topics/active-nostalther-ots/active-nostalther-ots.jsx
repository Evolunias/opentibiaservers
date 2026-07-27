import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-ots');
}

export default function ActiveNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-ots" />;
}
