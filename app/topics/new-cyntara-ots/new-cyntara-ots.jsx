import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-ots');
}

export default function NewCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-ots" />;
}
