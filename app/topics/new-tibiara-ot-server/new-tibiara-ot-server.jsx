import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-ot-server');
}

export default function NewTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-ot-server" />;
}
