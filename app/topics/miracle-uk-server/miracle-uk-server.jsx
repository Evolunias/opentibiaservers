import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-uk-server');
}

export default function MiracleUkServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-uk-server" />;
}
