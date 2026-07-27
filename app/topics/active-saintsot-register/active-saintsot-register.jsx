import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-register');
}

export default function ActiveSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-register" />;
}
