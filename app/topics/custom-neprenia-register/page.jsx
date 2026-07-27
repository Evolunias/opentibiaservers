import CustomNepreniaRegisterKeywordPage, { generateMetadata } from './custom-neprenia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNepreniaRegisterKeywordPage />;
}
