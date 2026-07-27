import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-client');
}

export default function NewSeasonAlasteraClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-client" />;
}
