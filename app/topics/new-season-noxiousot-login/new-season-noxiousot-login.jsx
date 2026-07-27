import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-login');
}

export default function NewSeasonNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-login" />;
}
