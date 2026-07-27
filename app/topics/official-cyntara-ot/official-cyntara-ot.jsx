import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-ot');
}

export default function OfficialCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-ot" />;
}
