import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-canada');
}

export default function TibiaoriginsLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-canada" />;
}
