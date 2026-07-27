import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-high-exp-server');
}

export default function Neprenia11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-high-exp-server" />;
}
