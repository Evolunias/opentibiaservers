import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-latin-america');
}

export default function TibiaoriginsLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-latin-america" />;
}
