import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-ots');
}

export default function NostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="nostalther-ots" />;
}
