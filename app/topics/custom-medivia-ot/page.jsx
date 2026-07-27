import CustomMediviaOtKeywordPage, { generateMetadata } from './custom-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaOtKeywordPage />;
}
