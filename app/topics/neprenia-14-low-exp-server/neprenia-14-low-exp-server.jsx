import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-low-exp-server');
}

export default function Neprenia14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-low-exp-server" />;
}
