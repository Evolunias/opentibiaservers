import CustomMapRegisterArgentinaKeywordPage, { generateMetadata } from './custom-map-register-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterArgentinaKeywordPage />;
}
