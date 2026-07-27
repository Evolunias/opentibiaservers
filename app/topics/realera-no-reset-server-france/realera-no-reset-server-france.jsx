import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-france');
}

export default function RealeraNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-france" />;
}
