import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-official');
}

export default function NoResetSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-official" />;
}
