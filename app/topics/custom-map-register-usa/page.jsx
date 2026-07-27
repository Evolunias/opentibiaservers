import CustomMapRegisterUsaKeywordPage, { generateMetadata } from './custom-map-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterUsaKeywordPage />;
}
