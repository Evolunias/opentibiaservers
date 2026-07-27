import CustomMapRegisterPolandKeywordPage, { generateMetadata } from './custom-map-register-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRegisterPolandKeywordPage />;
}
