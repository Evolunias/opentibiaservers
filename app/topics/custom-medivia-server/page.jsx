import CustomMediviaServerKeywordPage, { generateMetadata } from './custom-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaServerKeywordPage />;
}
