import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-uk-servers');
}

export default function RealestaUkServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-uk-servers" />;
}
