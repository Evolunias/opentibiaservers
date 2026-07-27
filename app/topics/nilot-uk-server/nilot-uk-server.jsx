import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-uk-server');
}

export default function NilotUkServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-uk-server" />;
}
