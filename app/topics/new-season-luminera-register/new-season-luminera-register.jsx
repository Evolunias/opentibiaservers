import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-register');
}

export default function NewSeasonLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-register" />;
}
