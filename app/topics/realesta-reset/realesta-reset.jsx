import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-reset');
}

export default function RealestaResetKeywordPage() {
  return <StaticKeywordPage slug="realesta-reset" />;
}
