import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-usa');
}

export default function TibiaoriginsLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-usa" />;
}
