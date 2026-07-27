import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-status');
}

export default function AureraGlobalStatusKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-status" />;
}
