import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-sweden');
}

export default function TibiaoriginsHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-sweden" />;
}
