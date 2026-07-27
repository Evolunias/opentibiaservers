import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-north-america');
}

export default function TibiaoriginsHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-north-america" />;
}
