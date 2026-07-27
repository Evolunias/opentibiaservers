import OtservlistClientKeywordPage, { generateMetadata } from './otservlist-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistClientKeywordPage />;
}
