import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-ot-server');
}

export default function NewSeasonThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-ot-server" />;
}
