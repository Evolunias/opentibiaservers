import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-official');
}

export default function NoResetXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-official" />;
}
