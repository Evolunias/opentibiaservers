import CustomMapRegisterNorthAmericaKeywordPage, { generateMetadata } from './custom-map-register-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterNorthAmericaKeywordPage />;
}
