import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-low-exp-server-sweden');
}

export default function DuraOnlineLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-low-exp-server-sweden" />;
}
