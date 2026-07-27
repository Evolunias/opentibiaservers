import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-high-exp-server');
}

export default function Neprenia14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-high-exp-server" />;
}
