import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-mexico');
}

export default function TibiaoriginsLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-mexico" />;
}
