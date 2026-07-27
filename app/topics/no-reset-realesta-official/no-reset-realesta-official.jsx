import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-official');
}

export default function NoResetRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-official" />;
}
