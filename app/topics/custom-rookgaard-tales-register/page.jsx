import CustomRookgaardTalesRegisterKeywordPage, { generateMetadata } from './custom-rookgaard-tales-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRookgaardTalesRegisterKeywordPage />;
}
