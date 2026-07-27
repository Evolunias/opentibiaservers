import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-register');
}

export default function NewSeasonSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-register" />;
}
