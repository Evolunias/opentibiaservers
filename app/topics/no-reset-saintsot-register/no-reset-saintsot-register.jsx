import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-register');
}

export default function NoResetSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-register" />;
}
