import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-register');
}

export default function NewSeasonNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-register" />;
}
