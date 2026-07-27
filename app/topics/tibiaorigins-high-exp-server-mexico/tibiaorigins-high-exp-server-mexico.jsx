import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-mexico');
}

export default function TibiaoriginsHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-mexico" />;
}
