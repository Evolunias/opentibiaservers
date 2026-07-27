import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-high-exp-server');
}

export default function Neprenia1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-high-exp-server" />;
}
