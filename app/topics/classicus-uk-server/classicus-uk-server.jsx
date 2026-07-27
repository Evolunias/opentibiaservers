import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-uk-server');
}

export default function ClassicusUkServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-uk-server" />;
}
