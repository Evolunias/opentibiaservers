import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-register');
}

export default function NewSeasonRangerSArcaniRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-register" />;
}
