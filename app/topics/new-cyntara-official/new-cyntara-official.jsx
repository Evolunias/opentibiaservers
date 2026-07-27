import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-official');
}

export default function NewCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-official" />;
}
