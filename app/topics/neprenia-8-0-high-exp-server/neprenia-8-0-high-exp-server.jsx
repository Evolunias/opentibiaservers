import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-0-high-exp-server');
}

export default function Neprenia80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-0-high-exp-server" />;
}
