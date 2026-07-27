import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-register');
}

export default function NewSeasonImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-register" />;
}
