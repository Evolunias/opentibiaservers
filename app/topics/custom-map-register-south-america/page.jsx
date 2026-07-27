import CustomMapRegisterSouthAmericaKeywordPage, { generateMetadata } from './custom-map-register-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterSouthAmericaKeywordPage />;
}
