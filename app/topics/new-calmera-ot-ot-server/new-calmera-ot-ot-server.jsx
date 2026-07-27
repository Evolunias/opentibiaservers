import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-ot-server');
}

export default function NewCalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-ot-server" />;
}
