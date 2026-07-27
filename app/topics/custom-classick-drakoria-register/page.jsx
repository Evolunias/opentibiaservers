import CustomClassickDrakoriaRegisterKeywordPage, { generateMetadata } from './custom-classick-drakoria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaRegisterKeywordPage />;
}
