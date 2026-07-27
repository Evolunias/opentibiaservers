import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-login');
}

export default function NewSeasonSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-login" />;
}
