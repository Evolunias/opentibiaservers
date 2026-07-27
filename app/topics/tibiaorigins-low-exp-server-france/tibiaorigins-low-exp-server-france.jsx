import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-france');
}

export default function TibiaoriginsLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-france" />;
}
