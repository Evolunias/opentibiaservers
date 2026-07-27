import CustomRookgaardTalesClientKeywordPage, { generateMetadata } from './custom-rookgaard-tales-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRookgaardTalesClientKeywordPage />;
}
