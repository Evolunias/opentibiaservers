import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-europe');
}

export default function OtServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-europe" />;
}
