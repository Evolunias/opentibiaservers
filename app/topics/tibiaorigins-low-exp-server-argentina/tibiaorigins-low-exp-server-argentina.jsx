import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-argentina');
}

export default function TibiaoriginsLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-argentina" />;
}
