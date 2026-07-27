import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-register');
}

export default function LowrateSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-register" />;
}
