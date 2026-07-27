import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-uk-servers');
}

export default function AureraGlobalUkServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-uk-servers" />;
}
