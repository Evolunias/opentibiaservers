import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-ot');
}

export default function NewCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-ot" />;
}
