import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-uk-server');
}

export default function RealeraUkServerKeywordPage() {
  return <StaticKeywordPage slug="realera-uk-server" />;
}
