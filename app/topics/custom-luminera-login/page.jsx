import CustomLumineraLoginKeywordPage, { generateMetadata } from './custom-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraLoginKeywordPage />;
}
