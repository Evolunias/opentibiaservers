import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-south-america');
}

export default function TibiaoriginsHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-south-america" />;
}
