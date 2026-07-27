import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-low-exp-server');
}

export default function Neprenia71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-low-exp-server" />;
}
