import OtservlistUsaKeywordPage, { generateMetadata } from './otservlist-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistUsaKeywordPage />;
}
