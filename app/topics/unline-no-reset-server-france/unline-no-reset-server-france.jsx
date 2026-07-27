import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-no-reset-server-france');
}

export default function UnlineNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-no-reset-server-france" />;
}
