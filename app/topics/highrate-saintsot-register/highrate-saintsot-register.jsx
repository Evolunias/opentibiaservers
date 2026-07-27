import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-register');
}

export default function HighrateSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-register" />;
}
