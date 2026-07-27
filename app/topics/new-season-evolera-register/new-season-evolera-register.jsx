import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-register');
}

export default function NewSeasonEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-register" />;
}
