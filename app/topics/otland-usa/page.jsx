import OtlandUsaKeywordPage, { generateMetadata } from './otland-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandUsaKeywordPage />;
}
