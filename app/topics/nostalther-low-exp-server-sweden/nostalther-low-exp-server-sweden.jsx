import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-sweden');
}

export default function NostaltherLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-sweden" />;
}
