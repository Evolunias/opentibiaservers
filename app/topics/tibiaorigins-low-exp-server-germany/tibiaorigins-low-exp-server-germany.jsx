import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-germany');
}

export default function TibiaoriginsLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-germany" />;
}
