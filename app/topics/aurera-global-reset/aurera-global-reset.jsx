import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-reset');
}

export default function AureraGlobalResetKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-reset" />;
}
