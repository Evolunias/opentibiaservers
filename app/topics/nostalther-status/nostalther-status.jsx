import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-status');
}

export default function NostaltherStatusKeywordPage() {
  return <StaticKeywordPage slug="nostalther-status" />;
}
