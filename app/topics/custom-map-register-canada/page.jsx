import CustomMapRegisterCanadaKeywordPage, { generateMetadata } from './custom-map-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterCanadaKeywordPage />;
}
