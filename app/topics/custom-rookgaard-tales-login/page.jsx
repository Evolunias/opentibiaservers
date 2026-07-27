import CustomRookgaardTalesLoginKeywordPage, { generateMetadata } from './custom-rookgaard-tales-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRookgaardTalesLoginKeywordPage />;
}
