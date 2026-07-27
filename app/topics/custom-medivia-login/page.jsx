import CustomMediviaLoginKeywordPage, { generateMetadata } from './custom-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaLoginKeywordPage />;
}
