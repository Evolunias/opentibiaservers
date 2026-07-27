import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-france');
}

export default function TibianusLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-france" />;
}
