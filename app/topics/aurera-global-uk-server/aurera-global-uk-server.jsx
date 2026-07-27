import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-uk-server');
}

export default function AureraGlobalUkServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-uk-server" />;
}
