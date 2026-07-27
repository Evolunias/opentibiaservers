import CustomLumineraOfficialKeywordPage, { generateMetadata } from './custom-luminera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraOfficialKeywordPage />;
}
