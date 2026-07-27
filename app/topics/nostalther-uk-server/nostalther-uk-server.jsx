import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-uk-server');
}

export default function NostaltherUkServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-uk-server" />;
}
