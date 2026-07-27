import CustomMediviaKeywordPage, { generateMetadata } from './custom-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaKeywordPage />;
}
