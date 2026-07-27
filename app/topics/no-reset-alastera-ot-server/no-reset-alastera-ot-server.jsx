import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-ot-server');
}

export default function NoResetAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-ot-server" />;
}
