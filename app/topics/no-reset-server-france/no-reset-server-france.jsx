import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-france');
}

export default function NoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-france" />;
}
