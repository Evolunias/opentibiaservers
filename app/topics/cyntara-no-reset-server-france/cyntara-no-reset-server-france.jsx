import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-france');
}

export default function CyntaraNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-france" />;
}
