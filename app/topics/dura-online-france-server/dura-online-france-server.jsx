import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-france-server');
}

export default function DuraOnlineFranceServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-france-server" />;
}
