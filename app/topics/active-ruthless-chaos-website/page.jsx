import ActiveRuthlessChaosWebsiteKeywordPage, { generateMetadata } from './active-ruthless-chaos-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosWebsiteKeywordPage />;
}
