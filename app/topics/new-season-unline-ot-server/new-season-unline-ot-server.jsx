import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-ot-server');
}

export default function NewSeasonUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-ot-server" />;
}
