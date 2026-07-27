import OtmadnessDonationsKeywordPage, { generateMetadata } from './otmadness-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessDonationsKeywordPage />;
}
