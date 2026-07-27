import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-status');
}

export default function RealestaStatusKeywordPage() {
  return <StaticKeywordPage slug="realesta-status" />;
}
