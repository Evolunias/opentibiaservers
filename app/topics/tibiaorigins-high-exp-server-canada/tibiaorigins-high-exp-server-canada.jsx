import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-canada');
}

export default function TibiaoriginsHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-canada" />;
}
