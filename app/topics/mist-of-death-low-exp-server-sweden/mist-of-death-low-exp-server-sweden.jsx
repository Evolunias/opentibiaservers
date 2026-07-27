import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-sweden');
}

export default function MistOfDeathLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-sweden" />;
}
