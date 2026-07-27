import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-uk-servers');
}

export default function NilotUkServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-uk-servers" />;
}
