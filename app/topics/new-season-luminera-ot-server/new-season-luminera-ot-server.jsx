import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-ot-server');
}

export default function NewSeasonLumineraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-ot-server" />;
}
