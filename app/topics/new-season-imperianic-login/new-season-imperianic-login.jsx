import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-login');
}

export default function NewSeasonImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-login" />;
}
