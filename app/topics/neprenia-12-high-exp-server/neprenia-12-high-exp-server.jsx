import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-high-exp-server');
}

export default function Neprenia12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-high-exp-server" />;
}
