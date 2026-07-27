import RuthlessChaosLauncherKeywordPage, { generateMetadata } from './ruthless-chaos-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosLauncherKeywordPage />;
}
