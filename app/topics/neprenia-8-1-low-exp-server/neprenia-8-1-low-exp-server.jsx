import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-low-exp-server');
}

export default function Neprenia81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-low-exp-server" />;
}
