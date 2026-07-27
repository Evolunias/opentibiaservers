import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-poland');
}

export default function OtServersPolandKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-poland" />;
}
