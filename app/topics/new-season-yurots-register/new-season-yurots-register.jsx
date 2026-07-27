import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-register');
}

export default function NewSeasonYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-register" />;
}
