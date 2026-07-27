import CustomLumineraClientKeywordPage, { generateMetadata } from './custom-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraClientKeywordPage />;
}
