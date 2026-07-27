import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-register');
}

export default function NewSeasonUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-register" />;
}
