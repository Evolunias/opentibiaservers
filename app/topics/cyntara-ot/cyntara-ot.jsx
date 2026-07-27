import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-ot');
}

export default function CyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="cyntara-ot" />;
}
