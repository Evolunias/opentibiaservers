import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-old-school-server-argentina');
}

export default function HarmoniaOtOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-old-school-server-argentina" />;
}
