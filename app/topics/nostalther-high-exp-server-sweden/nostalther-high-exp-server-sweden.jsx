import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp-server-sweden');
}

export default function NostaltherHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp-server-sweden" />;
}
