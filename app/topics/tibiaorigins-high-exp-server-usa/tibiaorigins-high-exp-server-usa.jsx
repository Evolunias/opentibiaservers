import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-usa');
}

export default function TibiaoriginsHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-usa" />;
}
