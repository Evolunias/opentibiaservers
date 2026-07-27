import CustomMapRegisterSwedenKeywordPage, { generateMetadata } from './custom-map-register-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterSwedenKeywordPage />;
}
