import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-server');
}

export default function NewSeasonAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-server" />;
}
