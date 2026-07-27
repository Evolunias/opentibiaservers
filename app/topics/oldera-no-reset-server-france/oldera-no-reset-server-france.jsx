import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-france');
}

export default function OlderaNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-france" />;
}
