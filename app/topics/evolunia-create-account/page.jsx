import EvoluniaCreateAccountKeywordPage, { generateMetadata } from './evolunia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaCreateAccountKeywordPage />;
}
