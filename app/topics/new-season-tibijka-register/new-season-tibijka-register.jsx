import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-register');
}

export default function NewSeasonTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-register" />;
}
