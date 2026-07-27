import CustomRookgaardTalesOtKeywordPage, { generateMetadata } from './custom-rookgaard-tales-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRookgaardTalesOtKeywordPage />;
}
