import CustomTibiascapeKeywordPage, { generateMetadata } from './custom-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeKeywordPage />;
}
