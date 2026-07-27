import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-france');
}

export default function NoResetServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-france" />;
}
