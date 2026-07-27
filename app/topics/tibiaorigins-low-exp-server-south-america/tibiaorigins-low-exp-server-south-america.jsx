import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-south-america');
}

export default function TibiaoriginsLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-south-america" />;
}
