import CustomCanobRegisterKeywordPage, { generateMetadata } from './custom-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobRegisterKeywordPage />;
}
