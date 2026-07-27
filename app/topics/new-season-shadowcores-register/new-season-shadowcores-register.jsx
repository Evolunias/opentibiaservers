import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-register');
}

export default function NewSeasonShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-register" />;
}
