import CustomMapRegisterUkKeywordPage, { generateMetadata } from './custom-map-register-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterUkKeywordPage />;
}
