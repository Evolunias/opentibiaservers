import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic');
}

export default function NoResetImperianicKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic" />;
}
