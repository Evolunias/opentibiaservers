import CustomClassicusOtKeywordPage, { generateMetadata } from './custom-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusOtKeywordPage />;
}
