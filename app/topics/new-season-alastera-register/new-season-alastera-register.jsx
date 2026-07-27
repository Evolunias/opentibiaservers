import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-register');
}

export default function NewSeasonAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-register" />;
}
