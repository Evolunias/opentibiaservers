import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-server');
}

export default function NewTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-server" />;
}
