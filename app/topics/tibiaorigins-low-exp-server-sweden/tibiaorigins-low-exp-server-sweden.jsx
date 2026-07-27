import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-sweden');
}

export default function TibiaoriginsLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-sweden" />;
}
