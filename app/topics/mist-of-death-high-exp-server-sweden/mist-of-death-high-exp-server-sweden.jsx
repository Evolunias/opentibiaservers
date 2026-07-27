import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp-server-sweden');
}

export default function MistOfDeathHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp-server-sweden" />;
}
