import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-ot-server');
}

export default function NewSeasonSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-ot-server" />;
}
