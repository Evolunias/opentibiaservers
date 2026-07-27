import CustomLumineraServerKeywordPage, { generateMetadata } from './custom-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraServerKeywordPage />;
}
