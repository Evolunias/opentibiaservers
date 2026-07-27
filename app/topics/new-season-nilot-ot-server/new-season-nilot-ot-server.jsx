import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-ot-server');
}

export default function NewSeasonNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-ot-server" />;
}
