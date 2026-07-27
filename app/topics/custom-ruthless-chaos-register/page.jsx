import CustomRuthlessChaosRegisterKeywordPage, { generateMetadata } from './custom-ruthless-chaos-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRuthlessChaosRegisterKeywordPage />;
}
