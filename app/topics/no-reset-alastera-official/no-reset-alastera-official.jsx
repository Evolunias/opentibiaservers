import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-official');
}

export default function NoResetAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-official" />;
}
