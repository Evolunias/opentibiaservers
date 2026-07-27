import OtservlistActiveKeywordPage, { generateMetadata } from './otservlist-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistActiveKeywordPage />;
}
