import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-register');
}

export default function NewSeasonSabrehavenRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-register" />;
}
