import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-uk-server');
}

export default function RealestaUkServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-uk-server" />;
}
