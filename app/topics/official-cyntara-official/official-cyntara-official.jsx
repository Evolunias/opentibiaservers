import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-official');
}

export default function OfficialCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-official" />;
}
