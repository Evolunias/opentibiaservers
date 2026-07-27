import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-low-exp-server');
}

export default function Neprenia13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-low-exp-server" />;
}
