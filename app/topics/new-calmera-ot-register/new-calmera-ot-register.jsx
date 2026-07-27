import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-register');
}

export default function NewCalmeraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-register" />;
}
