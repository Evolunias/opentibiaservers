import CustomRuthlessChaosLoginKeywordPage, { generateMetadata } from './custom-ruthless-chaos-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRuthlessChaosLoginKeywordPage />;
}
