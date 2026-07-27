import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-latin-america');
}

export default function TibiaoriginsHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-latin-america" />;
}
