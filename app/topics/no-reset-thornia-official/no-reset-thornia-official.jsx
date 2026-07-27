import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-official');
}

export default function NoResetThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-official" />;
}
