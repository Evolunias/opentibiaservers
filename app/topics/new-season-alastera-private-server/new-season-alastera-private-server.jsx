import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-private-server');
}

export default function NewSeasonAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-private-server" />;
}
