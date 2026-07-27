import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-client');
}

export default function NewSeasonSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-client" />;
}
