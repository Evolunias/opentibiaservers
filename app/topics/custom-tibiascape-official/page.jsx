import CustomTibiascapeOfficialKeywordPage, { generateMetadata } from './custom-tibiascape-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeOfficialKeywordPage />;
}
