import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-uk-servers');
}

export default function EvoleraUkServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-uk-servers" />;
}
