import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-launch');
}

export default function NepreniaLaunchKeywordPage() {
  return <StaticKeywordPage slug="neprenia-launch" />;
}
