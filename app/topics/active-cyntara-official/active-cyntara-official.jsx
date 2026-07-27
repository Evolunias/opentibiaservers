import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-official');
}

export default function ActiveCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-official" />;
}
