import CustomMediviaClientKeywordPage, { generateMetadata } from './custom-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaClientKeywordPage />;
}
