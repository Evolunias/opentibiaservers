import CustomEvoluniaCreateAccountKeywordPage, { generateMetadata } from './custom-evolunia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaCreateAccountKeywordPage />;
}
