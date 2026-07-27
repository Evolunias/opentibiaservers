import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-uk-servers');
}

export default function NostaltherUkServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-uk-servers" />;
}
