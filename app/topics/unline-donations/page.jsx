import UnlineDonationsKeywordPage, { generateMetadata } from './unline-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineDonationsKeywordPage />;
}
