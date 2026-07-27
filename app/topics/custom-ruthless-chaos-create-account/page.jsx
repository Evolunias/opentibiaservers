import CustomRuthlessChaosCreateAccountKeywordPage, { generateMetadata } from './custom-ruthless-chaos-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRuthlessChaosCreateAccountKeywordPage />;
}
