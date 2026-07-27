import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-ots');
}

export default function ActiveCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-ots" />;
}
