import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-argentina');
}

export default function NepreniaLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-argentina" />;
}
