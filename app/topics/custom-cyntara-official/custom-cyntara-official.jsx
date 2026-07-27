import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-official');
}

export default function CustomCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-official" />;
}
