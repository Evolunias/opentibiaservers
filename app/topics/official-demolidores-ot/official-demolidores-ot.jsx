import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-ot');
}

export default function OfficialDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-ot" />;
}
