import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-ot');
}

export default function ActiveCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-ot" />;
}
