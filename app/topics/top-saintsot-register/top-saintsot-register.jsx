import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-register');
}

export default function TopSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-register" />;
}
