import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-low-exp-server');
}

export default function Neprenia84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-low-exp-server" />;
}
