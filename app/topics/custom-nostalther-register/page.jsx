import CustomNostaltherRegisterKeywordPage, { generateMetadata } from './custom-nostalther-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherRegisterKeywordPage />;
}
