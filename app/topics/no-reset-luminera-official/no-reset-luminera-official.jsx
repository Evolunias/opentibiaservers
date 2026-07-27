import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-official');
}

export default function NoResetLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-official" />;
}
