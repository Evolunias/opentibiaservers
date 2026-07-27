import CustomRealeraLoginKeywordPage, { generateMetadata } from './custom-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraLoginKeywordPage />;
}
