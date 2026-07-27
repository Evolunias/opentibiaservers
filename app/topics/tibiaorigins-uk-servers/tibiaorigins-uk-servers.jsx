import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-uk-servers');
}

export default function TibiaoriginsUkServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-uk-servers" />;
}
