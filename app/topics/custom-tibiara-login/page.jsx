import CustomTibiaraLoginKeywordPage, { generateMetadata } from './custom-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraLoginKeywordPage />;
}
