import CurrentRuthlessChaosWebsiteKeywordPage, { generateMetadata } from './current-ruthless-chaos-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosWebsiteKeywordPage />;
}
