import CustomCarlinotRegisterKeywordPage, { generateMetadata } from './custom-carlinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotRegisterKeywordPage />;
}
