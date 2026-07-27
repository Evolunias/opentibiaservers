import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-ot-server');
}

export default function NewSeasonCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-ot-server" />;
}
