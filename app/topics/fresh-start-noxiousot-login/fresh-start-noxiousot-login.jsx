import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-login');
}

export default function FreshStartNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-login" />;
}
