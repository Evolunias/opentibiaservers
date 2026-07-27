import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-client');
}

export default function NewSeasonZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-client" />;
}
