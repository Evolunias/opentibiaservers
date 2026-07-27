import CustomMarolaotRegisterKeywordPage, { generateMetadata } from './custom-marolaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotRegisterKeywordPage />;
}
