import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-register');
}

export default function CustomSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-register" />;
}
