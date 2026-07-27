import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-reset');
}

export default function AlasteraResetKeywordPage() {
  return <StaticKeywordPage slug="alastera-reset" />;
}
