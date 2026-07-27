import CustomYurotsRegisterKeywordPage, { generateMetadata } from './custom-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsRegisterKeywordPage />;
}
