import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-status');
}

export default function UnlineStatusKeywordPage() {
  return <StaticKeywordPage slug="unline-status" />;
}
