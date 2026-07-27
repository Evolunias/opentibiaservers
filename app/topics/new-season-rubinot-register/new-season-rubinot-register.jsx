import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-register');
}

export default function NewSeasonRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-register" />;
}
