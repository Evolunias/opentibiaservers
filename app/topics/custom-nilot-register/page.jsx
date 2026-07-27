import CustomNilotRegisterKeywordPage, { generateMetadata } from './custom-nilot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotRegisterKeywordPage />;
}
