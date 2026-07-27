import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-old-school-server-argentina');
}

export default function OxygenotOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-old-school-server-argentina" />;
}
