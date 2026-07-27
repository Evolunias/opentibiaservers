import CustomRookgaardTalesOtsKeywordPage, { generateMetadata } from './custom-rookgaard-tales-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRookgaardTalesOtsKeywordPage />;
}
