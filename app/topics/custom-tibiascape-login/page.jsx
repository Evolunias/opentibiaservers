import CustomTibiascapeLoginKeywordPage, { generateMetadata } from './custom-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeLoginKeywordPage />;
}
