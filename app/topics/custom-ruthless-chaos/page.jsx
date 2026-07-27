import CustomRuthlessChaosKeywordPage, { generateMetadata } from './custom-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRuthlessChaosKeywordPage />;
}
