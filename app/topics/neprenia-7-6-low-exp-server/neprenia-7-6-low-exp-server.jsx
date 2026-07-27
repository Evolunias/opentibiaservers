import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-low-exp-server');
}

export default function Neprenia76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-low-exp-server" />;
}
