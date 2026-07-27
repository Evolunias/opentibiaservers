import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-register');
}

export default function NewSeasonTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-register" />;
}
