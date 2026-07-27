import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-france');
}

export default function TibiaoriginsHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-france" />;
}
