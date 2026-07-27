import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-france');
}

export default function CyntaraBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-france" />;
}
