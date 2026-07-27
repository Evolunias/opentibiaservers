import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-0-low-exp-server');
}

export default function Neprenia80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-0-low-exp-server" />;
}
