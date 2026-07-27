import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-uk-servers');
}

export default function MiracleUkServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-uk-servers" />;
}
