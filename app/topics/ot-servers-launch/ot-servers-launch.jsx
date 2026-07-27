import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-launch');
}

export default function OtServersLaunchKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-launch" />;
}
