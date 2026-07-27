import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-uk-server');
}

export default function TibiaoriginsUkServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-uk-server" />;
}
