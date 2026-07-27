import CustomRuthlessChaosWebsiteKeywordPage, { generateMetadata } from './custom-ruthless-chaos-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRuthlessChaosWebsiteKeywordPage />;
}
