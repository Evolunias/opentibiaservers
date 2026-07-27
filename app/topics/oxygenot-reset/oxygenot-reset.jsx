import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-reset');
}

export default function OxygenotResetKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-reset" />;
}
