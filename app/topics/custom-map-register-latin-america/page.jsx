import CustomMapRegisterLatinAmericaKeywordPage, { generateMetadata } from './custom-map-register-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterLatinAmericaKeywordPage />;
}
