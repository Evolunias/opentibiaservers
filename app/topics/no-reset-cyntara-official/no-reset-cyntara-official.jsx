import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-official');
}

export default function NoResetCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-official" />;
}
