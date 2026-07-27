import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-france');
}

export default function BaiakServersFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-france" />;
}
