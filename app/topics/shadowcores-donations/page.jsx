import ShadowcoresDonationsKeywordPage, { generateMetadata } from './shadowcores-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresDonationsKeywordPage />;
}
