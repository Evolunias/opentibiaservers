import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-register');
}

export default function NewSeasonXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-register" />;
}
