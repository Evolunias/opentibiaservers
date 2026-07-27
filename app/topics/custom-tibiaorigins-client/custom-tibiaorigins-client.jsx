import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-client');
}

export default function CustomTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-client" />;
}
