import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-register');
}

export default function NewSeasonAmeriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-register" />;
}
