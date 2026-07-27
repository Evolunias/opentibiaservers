import CustomSaintsotRegisterKeywordPage, { generateMetadata } from './custom-saintsot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotRegisterKeywordPage />;
}
