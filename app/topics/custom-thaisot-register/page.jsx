import CustomThaisotRegisterKeywordPage, { generateMetadata } from './custom-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotRegisterKeywordPage />;
}
