import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-ot-server');
}

export default function NewSeasonAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-ot-server" />;
}
