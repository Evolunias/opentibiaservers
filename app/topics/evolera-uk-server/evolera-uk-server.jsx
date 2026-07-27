import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-uk-server');
}

export default function EvoleraUkServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-uk-server" />;
}
