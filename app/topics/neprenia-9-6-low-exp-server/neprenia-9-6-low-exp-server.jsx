import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-low-exp-server');
}

export default function Neprenia96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-low-exp-server" />;
}
