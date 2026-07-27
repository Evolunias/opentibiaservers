import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-reset');
}

export default function MediviaResetKeywordPage() {
  return <StaticKeywordPage slug="medivia-reset" />;
}
