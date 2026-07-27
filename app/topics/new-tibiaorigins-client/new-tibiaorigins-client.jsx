import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-client');
}

export default function NewTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-client" />;
}
