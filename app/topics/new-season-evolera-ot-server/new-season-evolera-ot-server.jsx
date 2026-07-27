import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-ot-server');
}

export default function NewSeasonEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-ot-server" />;
}
