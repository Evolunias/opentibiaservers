import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-france-servers');
}

export default function DuraOnlineFranceServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-france-servers" />;
}
