import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-ot-server');
}

export default function NewSeasonEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-ot-server" />;
}
