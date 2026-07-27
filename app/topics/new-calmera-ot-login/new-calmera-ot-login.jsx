import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-login');
}

export default function NewCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-login" />;
}
