import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-north-america');
}

export default function TibiaoriginsLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-north-america" />;
}
