import ClassicusDonationsKeywordPage, { generateMetadata } from './classicus-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusDonationsKeywordPage />;
}
