import CustomAureraGlobalKeywordPage, { generateMetadata } from './custom-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAureraGlobalKeywordPage />;
}
