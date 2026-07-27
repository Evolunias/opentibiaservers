import CustomMapRegisterMexicoKeywordPage, { generateMetadata } from './custom-map-register-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterMexicoKeywordPage />;
}
