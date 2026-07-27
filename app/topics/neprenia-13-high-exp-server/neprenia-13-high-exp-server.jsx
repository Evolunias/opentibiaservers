import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-high-exp-server');
}

export default function Neprenia13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-high-exp-server" />;
}
