import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-ots');
}

export default function CyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="cyntara-ots" />;
}
