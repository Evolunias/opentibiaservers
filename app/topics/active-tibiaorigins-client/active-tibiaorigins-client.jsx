import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-client');
}

export default function ActiveTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-client" />;
}
