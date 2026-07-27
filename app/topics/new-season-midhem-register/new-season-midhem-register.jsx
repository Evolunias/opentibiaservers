import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-register');
}

export default function NewSeasonMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-register" />;
}
