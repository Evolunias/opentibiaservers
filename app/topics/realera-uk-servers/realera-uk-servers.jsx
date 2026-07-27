import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-uk-servers');
}

export default function RealeraUkServersKeywordPage() {
  return <StaticKeywordPage slug="realera-uk-servers" />;
}
