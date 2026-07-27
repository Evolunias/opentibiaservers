import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-low-exp-server');
}

export default function Neprenia12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-low-exp-server" />;
}
